
import { Collapse, Typography } from 'antd';
import {  MinusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Text, Title } = Typography;

export default function StyledAccordion() {
  const onChange = (key: string | string[]) => {
    console.log(key); // Handle active panel changes
  };

  // Custom render for icons
  const customExpandIcon = ({ isActive }: { isActive?: boolean }) =>
    isActive ? (
      <MinusOutlined style={{ fontSize: '18px', color: '#444' }} />
    ) : (
      <Text style={{ fontSize: '18px', fontWeight: 'bold' }}>=</Text>
    );

  return (
    <div style={{ backgroundColor: '#1c3d5a', padding: '20px', borderRadius: 'none',width:'70%',margin:'0 auto' }}>
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIcon={(panelProps) => customExpandIcon({ isActive: panelProps.isActive || false })} // Handle undefined isActive
        style={{ backgroundColor: '#fff', borderRadius: '8px' }}
      >
        {/* First Panel */}
        <Panel
          header={
            <Title level={5} style={{ margin: 0, fontWeight: 'bold', textAlign: 'start' }}>
              What is Pragmatic Institute?
            </Title>
          }
          key="1"
        >
          <Text style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
            Pragmatic Institute is the global leader in Product, Data, and Design training and certification programs for working professionals. Since
            1993, we’ve issued over 250,000 product management and product marketing certifications to professionals at companies around the globe.
          </Text>
        </Panel>

        {/* Second Panel */}
        <Panel
          header={
            <Title level={5} style={{ margin: 0, fontWeight: 'bold', textAlign: 'start' }}>
              What Certifications do you offer?
            </Title>
          }
          key="2"
        >
          <Text style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>Content related to certifications offered by Pragmatic Institute.</Text>
        </Panel>

        {/* Third Panel */}
        <Panel
          header={
            <Title level={5} style={{ margin: 0, fontWeight: 'bold', textAlign: 'start' }}>
              What other trainings do you provide?
            </Title>
          }
          key="3"
        >
          <Text style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
            Content related to additional training programs provided.
          </Text>
        </Panel>

        {/* Fourth Panel */}
        <Panel
          header={
            <Title level={5} style={{ margin: 0, fontWeight: 'bold', textAlign: 'start' }}>
              Do you offer team training?
            </Title>
          }
          key="4"
        >
          <Text style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
            Information on whether team training is offered.
          </Text>
        </Panel>
      </Collapse>
    </div>
  );
}
