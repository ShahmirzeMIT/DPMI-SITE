import {
    Background,
    ReactFlow,
    ReactFlowProvider,
    useNodesState,
    useEdgesState,
  } from '@xyflow/react';
  
  import '@xyflow/react/dist/style.css';
  import { useIncompleteEdge } from './useIncompleteEdge';
  
  const GhostNode = ({ data }: any) => (
    <div
      style={{
        padding: 10,
        border: '1px dashed gray',
        background: '#f9f9f9',
        borderRadius: 5,
      }}
    >
      Ghost Node
    </div>
  );
  
  const nodeTypes = {
    ghost: GhostNode,
  };
  
  const initialNodes = [
    { id: '0', type: 'input', data: { label: 'A' }, position: { x: 0, y: -100 } },
    { id: '1', type: 'output', data: { label: 'B' }, position: { x: 0, y: 100 } },
  ];
  
export  const IncompleteEdge = () => {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
    const handlers = useIncompleteEdge();
  
    return (
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        {...handlers}
        style={{ backgroundColor: '#F7F9FB' }}
      >
        <Background />
      </ReactFlow>
    );
  };
  
  export default () => (
    <ReactFlowProvider>
      <IncompleteEdge />
    </ReactFlowProvider>
  );
  