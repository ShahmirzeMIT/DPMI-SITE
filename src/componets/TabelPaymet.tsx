import React, { useRef, useState } from "react";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { TableColumnsType } from "antd";
import "./paymentStyle.css";

interface DataType {
  key: string;
  [key: string]: any;
  columnConfig: any
}

// Sütunların adını dəyişdirmək və hansı sütunların göstəriləcəyini seçmək üçün obyekt


export default function TabelPaymet({ data,columnConfig }: { data: DataType[],columnConfig: any }) {
  const [_searchText, setSearchText] = useState("");
  const [_searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<any | null>(null);

  const handleSearch = (selectedKeys: string[], confirm: () => void, dataIndex: string) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex: string): any => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: {
      setSelectedKeys: (keys: React.Key[]) => void;
      selectedKeys: React.Key[];
      confirm: () => void;
      clearFilters?: () => void;
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: string, record: any) =>
      record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    sorter: (a: any, b: any) => a[dataIndex]?.toString().localeCompare(b[dataIndex]?.toString()),
    ellipsis: true,
  });

  // Dinamik sütun yaratma funksiyası (seçilmiş sütunlarla)
  const generateColumns = (data: DataType[]): TableColumnsType<DataType> => {
    if (!data.length) return [];
    return Object.keys(columnConfig) // columnConfig obyektindən istifadə et
      .filter((key) => key in data[0]) // Data içində olan sütunları seç
      .map((key) => ({
        title: columnConfig[key as keyof typeof columnConfig], // Sütun adlarını dəyiş
        dataIndex: key,
        key,
        ...getColumnSearchProps(key),
        ellipsis: false,
        width: "auto",
      }));
  };

  const columns = generateColumns(data);

  return (
    <Table
      columns={columns}
      dataSource={data}
      style={{ border: "1px solid #E9EDF1", width: "98%", margin: "0 auto",textAlign:"center",minHeight:'79vh' }}
      scroll={{ x: "100%", }} // Cədvəl içində scroll əlavə edir
      pagination={{ pageSize: 13 }} 
      // tableLayout="auto"
    />
  );
}
