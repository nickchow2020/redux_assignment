import { Button, Form, Input } from 'antd';
import {useDispatch} from 'react-redux';
import {fetchDataFromAPI} from "../redux/actionCreator";
import "./SearchForm.css"

const SearchForm = () => {

  const dispatch = useDispatch()

  const onFinish = (values) => {
    const value = values.search_value
    dispatch(fetchDataFromAPI(value))
  };




  return (
    <Form onFinish={onFinish} className="SearchForm">
      <div className='inputWrap'>
        <Form.Item className='searchInput'
        name="search_value"
        rules={[
          {
            required: true,
            message: 'Please input your Search Value!',
          },
        ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchForm;