import { addEdge, reconnectEdge, useReactFlow } from "@xyflow/react";
import { useCallback } from "react";

export function useIncompleteEdge() {
  const { setNodes, setEdges, screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (connection: any) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges],
  );

  const onConnectEnd = useCallback(
    (event: any, connectionState: any) => {
      if (
        connectionState.isValid ||
        connectionState.fromHandle.type === "target"
      ) {
        return;
      }

      const fromNodeId = connectionState.fromNode.id;
      const id = `ghost-${Date.now()}`;
      const { clientX, clientY } =
        "changedTouches" in event ? event.changedTouches[0] : event;
      const newNode = {
        id,
        type: "ghost",
        position: screenToFlowPosition({
          x: clientX,
          y: clientY,
        }),
        data: {},
      };

      const newEdge = {
        id: `${fromNodeId}->${id}`,
        source: fromNodeId,
        target: id,
        reconnectable: true, // Corrected type
      };

      setNodes((nodes) => nodes.concat(newNode));
      setEdges((edges: any) => addEdge(newEdge, edges));
    },
    [setNodes, setEdges, screenToFlowPosition],
  );

  const onReconnect = useCallback(
    (oldEdge: any, newConnection: any) =>
      setEdges((edges) => reconnectEdge(oldEdge, newConnection, edges)),
    [setEdges],
  );

  const onReconnectEnd = useCallback(
    (_: any, oldEdge: any, handleType: any) => {
      if (handleType === "source") {
        setNodes((nodes) => {
          return nodes.filter((node) => {
            const isGhost = node.type === "ghost";
            const isTarget = node.id === oldEdge.target;

            return !(isGhost && isTarget);
          });
        });

        setEdges((edges) => edges.filter((edge) => edge.id !== oldEdge.id));
      }
    },
    [setNodes, setEdges],
  );

  const onEdgesDelete = useCallback(
    (deletedEdges: any) => {
      setNodes((nodes) => {
        return deletedEdges.reduce(
          (acc: any, edge: any) =>
            acc.filter((n: any) => {
              const isGhost = n.type === "ghost";
              const isSourceOrTarget =
                n.id === edge.source || n.id === edge.target;

              return !(isGhost && isSourceOrTarget);
            }),
          nodes,
        );
      });
    },
    [setNodes],
  );

  return {
    onConnect,
    onConnectEnd,
    onReconnect,
    onReconnectEnd,
    onEdgesDelete,
  };
}
