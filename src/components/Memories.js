import Memory from './Memory'


const Memories = ({memories, onDelete}) => {
    
  return (
    <>
      {memories.map((memory) => (
        <Memory key={memory.id} memory={memory} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Memories;
