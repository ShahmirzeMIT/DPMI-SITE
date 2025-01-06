import { useMemo } from "react";
import ReactFlow, { Background, Controls, MarkerType } from "reactflow";
import "reactflow/dist/style.css";

type Module = {
  title: string;
  shortDesc: string;
};

type Props = {
  modules: Module[]; // Dinamik olaraq gələn modullar (2 ilə 6 arasında)
};

export const DynamicFlow = ({ modules }: Props) => {
  if (modules.length < 1 || modules.length > 5) {
    throw new Error("Modules array must contain between 1 and 5 items.");
  }

  const finalModule = {
    title: "Achieve Success",
    shortDesc: "Celebrate milestones and achievements.",
  };

  const completeModules = [...modules, finalModule];

  // Ekranın genişliyini və hündürlüyünü dinamik hesablamaq
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  const totalWidth = containerWidth * 0.8; // Modullar üçün nəzərdə tutulan genişlik (80%)
  const totalHeight = containerHeight * 0.8; // Modullar üçün nəzərdə tutulan hündürlük (80%)

  const minimumWidth = 200; // Modul üçün minimum genişlik
  const moduleWidth = Math.max(totalWidth / completeModules.length, minimumWidth); // Minimum genişlik tətbiqi
  const moduleHeight = totalHeight / completeModules.length; // Hər modul üçün hündürlük

  // Dinamik olaraq `nodes` yaratmaq
  const nodes = useMemo(() => {
    return completeModules.map((module, index) => ({
      id: `${index + 1}`,
      data: {
        label: (
          <div>
            <strong>{module.title}</strong>
            <p>{module.shortDesc}</p>
          </div>
        ),
      },
      position: {
        x: index * moduleWidth, // Sol alt küncdən sağa doğru
        y: containerHeight - (index + 1) * moduleHeight, // Aşağıdan yuxarıya doğru
      },
      style: {
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        backgroundColor: "white",
        width: moduleWidth * 0.8, // Modulun genişliyini uyğunlaşdırmaq
      },
    }));
  }, [completeModules, moduleWidth, moduleHeight, containerHeight]);

  // Dinamik olaraq `edges` yaratmaq
  const edges = useMemo(() => {
    return completeModules
      .map((_, index) => {
        if (index < completeModules.length - 1) {
          return {
            id: `e${index + 1}-${index + 2}`,
            source: `${index + 1}`,
            target: `${index + 2}`,
            type: "smoothstep",
            markerEnd: {
              type: MarkerType.Arrow,
            },
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [completeModules]);

  return (
    <div style={{ width: "85vw", height: "100vh", margin: "0 auto" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges as any}
        style={{ backgroundColor: "white" }}
        minZoom={0.25}
        maxZoom={2}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
