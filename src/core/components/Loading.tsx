export const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex items-center gap-4">
        <p className="text-xl font-medium">Cargando</p>
        <svg
          className="animate-spin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" />
        </svg>
      </div>
    </div>
  );
};
