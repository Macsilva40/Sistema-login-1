import { createConnection, Connection, getConnection } from "typeorm";

const BDConnect = async () => {
  let connection: Connection | undefined;

  try {
    connection = getConnection();
  } catch (error) {
    await createConnection();
  }

  console.log("🌴 Database connection was successful!");
};

// const TryDBConnect = async (onError: Function, next: Function) => {
//   try {
//     await BDConnect();
//     next();
//   } catch (error) {
//     onError();
//   }
// };

const TryDBConnect = async (onError: Function, next: Function) => {
  try {
    await BDConnect();
    next();
  } catch (error) {
    onError();
  }
};

export { TryDBConnect };
