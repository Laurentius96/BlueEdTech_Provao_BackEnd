// 61°) Usando um modelo do materias do Nest https://docs.nestjs.com/custom-decorators
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// 65°) importando o user do prisma
import { User } from '@prisma/client';

// 62°) Mudando o nome do decorator... de User para LoggedUser
export const LoggedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // 63°) convertendo o user do  expres pra o User do prisma... (ficava no auth.controller)
    const user = request.user as User;
    // 64°) tirando a senha...
    delete user.password;
    return user;
  },
);
