import { Card } from 'antd';
const { Meta } = Card;
const Album = ({title,imageURL,description}) => (
  <Card
    hoverable
    style={{
      width: 240,
      marginBottom:20,
      marginLeft:5
    }}
    cover={<img alt="example" src={imageURL} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default Album;