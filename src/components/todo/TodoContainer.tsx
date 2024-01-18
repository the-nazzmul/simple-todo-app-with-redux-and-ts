import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <Button>Add Todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
        {/* <div className="bg-white flex justify-center items-center rounded-md p-5 font-bold">
          <p>There is no task pending</p>
        </div> */}
        {/* <TodoCard /> */}
      </div>
    </div>
  );
};

export default TodoContainer;
