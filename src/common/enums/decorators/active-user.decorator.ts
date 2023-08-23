import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { createReadStream } from "fs";

export const ActiveUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user
    }
);