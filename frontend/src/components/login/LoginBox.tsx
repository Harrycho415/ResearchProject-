export default function LoginBox() {
  return (
    <div className="w-[320px] h-[322px] bg-white rounded p-[24px] justify-around flex flex-col">
      <div>
        <p className="text-black mb-[8px]">Email</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div>
        <p className="text-black mb-[8px]">Password</p>
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <div>
        <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded w-full">
          Sign In
        </button>
      </div>
      <div>
        <button className="text-black underline underline-offset-1">
          Forgot password?
        </button>
      </div>
    </div>
  );
}
