import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorators';
import { Role } from '../../common/enums/rol.enum';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor (private readonly reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean {

    const roles = this.reflector.getAllAndOverride<Role>(ROLES_KEY,[
      context.getHandler(),
      context.getClass(),
    ]);

    if(!roles) {
      return true;
    }
     const {user} = context.switchToHttp().getRequest();

     if(user.role === Role.ADMIN) {
      return true;
     }

     return roles === user.role;
  }
}
