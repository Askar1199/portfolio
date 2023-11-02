import "../project.scss";

interface props {
  item: {
    id: number;
    title: string;
    desc: string;
    image: string;
  }[];
}

const sections = ({ item }: props) => {
  return (
    <>
      {item.map((i) => (
        <section>{i.title}</section>
      ))}
    </>
  );
};

export default sections;
