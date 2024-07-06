import { deleteUser, removeUser } from "@/actions/user";

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      {/* hiddenさせずに削除する方法 */}
      <input type="hidden" name="id" value={"adsfasdfasdf"} />
      <button type="submit" className={buttonStyle}>
        delete
      </button>
    </form>
  );
}

export default DeleteButton;

const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white p-2 rounded";
