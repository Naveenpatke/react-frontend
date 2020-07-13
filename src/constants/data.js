import React  from 'react';

export const TableData =  [
        {
          "id": "16997960",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077517",
          "sales_order_number": "SO-032480",
          "estimated_shipping_date": "2020-02-03T00:00:00.000Z",
          "actual_shipping_date": "2020-02-04T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-04T00:00:00.000Z",
          "end_user_name": "SPS Commerce",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "16997964",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077530",
          "sales_order_number": "SO-032483",
          "estimated_shipping_date": "2020-02-03T00:00:00.000Z",
          "actual_shipping_date": "2020-02-04T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-04T00:00:00.000Z",
          "end_user_name": "Biogen",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17000578",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077575",
          "sales_order_number": "SO-032487",
          "estimated_shipping_date": "2020-02-03T00:00:00.000Z",
          "actual_shipping_date": "2020-02-04T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-04T00:00:00.000Z",
          "end_user_name": "Blue Cross Blue Shield of Arizona",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17004613",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077616",
          "sales_order_number": "SO-032491",
          "estimated_shipping_date": "2020-02-03T00:00:00.000Z",
          "actual_shipping_date": "2020-02-04T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-04T00:00:00.000Z",
          "end_user_name": "Licking Rural Electrification Inc",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17004615",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077700",
          "sales_order_number": "SO-032493",
          "estimated_shipping_date": "2020-02-03T00:00:00.000Z",
          "actual_shipping_date": "2020-02-04T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-04T00:00:00.000Z",
          "end_user_name": "Radial",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17011498",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077836",
          "sales_order_number": "SO-032497",
          "estimated_shipping_date": "2020-02-04T00:00:00.000Z",
          "actual_shipping_date": "2020-02-05T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-05T00:00:00.000Z",
          "end_user_name": "Milgard Manufacturing",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17012425",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302077921",
          "sales_order_number": "SO-032498",
          "estimated_shipping_date": "2020-02-04T00:00:00.000Z",
          "actual_shipping_date": "2020-02-05T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-05T00:00:00.000Z",
          "end_user_name": "LionsGate Entertainment",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17014068",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302078033",
          "sales_order_number": "SO-032500",
          "estimated_shipping_date": "2020-02-04T00:00:00.000Z",
          "actual_shipping_date": "2020-02-05T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-05T00:00:00.000Z",
          "end_user_name": "Continental Mills",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17014783",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302078119",
          "sales_order_number": "SO-032501",
          "estimated_shipping_date": "2020-02-04T00:00:00.000Z",
          "actual_shipping_date": "2020-02-05T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-05T00:00:00.000Z",
          "end_user_name": "Auto Europe",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        },
        {
          "id": "17022344",
          "account_id": "593873",
          "account_name": "Arrow ECS - NAM",
          "purchase_order_number": "103302078323",
          "sales_order_number": "SO-032509",
          "estimated_shipping_date": "2020-02-17T00:00:00.000Z",
          "actual_shipping_date": "2020-02-11T00:00:00.000Z",
          "order_acknowledgement_date": "2020-02-11T00:00:00.000Z",
          "end_user_name": "Columbian Mutual Life Insurance Company",
          "end_user_address": {
          },
          "shipping_address": {
          },
          "status": "Fulfilled"
        }
]

function dateToYMD(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return '' + d + '/' + m + '/' + y;
}

export const columnsHeader = [
    {
      title: 'Purchase Order',
      dataIndex: 'purchase_order_number',
      rowKey: 'purchase_order_number',
      render: purchase_order_number => <a href="http://localhost:3000" target="blank">{purchase_order_number}</a>,
      sorter : {
        compare: (a, b) => a.purchase_order_number - b.purchase_order_number,
      },
    },
    {
      title: 'Nutanix Sales Order #',
      dataIndex: 'sales_order_number',
      rowKey: 'sales_order_number',
      render: sales_order_number => <a href="http://localhost:3000" target="blank">{sales_order_number}</a>,
      sorter : {
        compare: (a, b) => a.sales_order_number - b.sales_order_number,
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      rowKey: 'status',
      sorter : {
        compare: (a, b) =>a.status -b.status,
      },
    },
    {
      title: 'Estimated Ship Date',
      dataIndex: 'estimated_shipping_date',
      rowKey: 'estimated_shipping_date',
      render: estimated_shipping_date => {

      return dateToYMD(new Date(estimated_shipping_date)); // Nov 5
      },
      sorter : {
        compare: (a, b) => a.estimated_shipping_date - b.estimated_shipping_date
      }
    },
    {
      title: 'Actual Ship Date',
      dataIndex: 'actual_shipping_date',
      rowKey: 'actual_shipping_date',
      render: actual_shipping_date => {

      return dateToYMD(new Date(actual_shipping_date)); // Nov 5
      },
      sorter : {
        compare: (a, b) => a.actual_shipping_date - b.actual_shipping_date,
      },
    },
    {
      title: 'End User',
      dataIndex: 'end_user_name',
      rowKey: 'end_user_name',
      sorter : {
        compare : (a, b) => a.end_user_name - b.end_user_name,
      },
    }

]