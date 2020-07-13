import React from 'react';
import './App.css';
import {Table, Menu, PageHeader, Input, Button} from 'antd';
import {TableData, columnsHeader} from './constants/data.js';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  const [ currentMenu, setCurrentMenu ] = React.useState('all-orders');

  const handleClick = (e) => {
    setCurrentMenu(e.key);
  }

  return (
    <div className="Table-orders">
      <MenuHeader currentMenu={currentMenu} handleClick={handleClick}/>
      <TablesPageHeader />

      {currentMenu === 'all-orders' 
              ? <Table  columns={columnsHeader} dataSource={TableData} 
                        pagination={{pageSize: 5}}  />
              : <h1>Responded Change Requests Will Be Shown Here</h1>
      }
    </div>
  );
}

const MenuHeader = (props) => {
  return(
    <Menu 
      className="Menu-Header" onClick={(e) => props.handleClick(e)} 
      selectedKeys={[props.currentMenu]} mode="horizontal">
      <Menu.Item key="all-orders">
          All Orders
      </Menu.Item>
      <Menu.Item key="responded-change-requests">
          Responded Change Requests
      </Menu.Item>
    </Menu>
  )
}

const TablesPageHeader = () => {
  return(
    <PageHeader
      ghost={false}
      title={
        <Input size="large" placeholder="Search by PO or SO or End User" 
              prefix={<SearchOutlined style={{color: 'black'}}/>} 
              style={{ width: 620, border: '1px solid black', borderRadius: '5px' }} />

      }
      style={{ backgroundColor: '#F2F2F2'}}
      extra={[
        <Button key="3" style={{color: 'black'}}>Export to CSV</Button>,
        <Button key="3">Status</Button>
      ]}
    >
    </PageHeader>
  )
}

export default App;
