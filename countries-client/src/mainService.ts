type ApiDataResponse = Promise<{
  message: string;
  status: number;
  data: string;
}>;

async function getData(): Promise<ApiDataResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        message: "all clear",
        status: 200,
        data: "user connected",
      });
    }, 3000);
  });
}

async function getUser(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("user ");
    }, 3000);
  });
}

async function init() {
  const result: Awaited<ApiDataResponse> = await getData();
  console.log(result);

  const functionResult: Awaited<ReturnType<typeof getUser>> = await getUser();
  console.log(functionResult);
}
init();
