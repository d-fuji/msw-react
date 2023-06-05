import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3001/api/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "Yamaguchi",
        gender: "male",
        age: 27,
      })
    );
  }),
];