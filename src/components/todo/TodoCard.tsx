import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className="bg-white rounded-md flex items-center justify-between p-3">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <Button>Del</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
