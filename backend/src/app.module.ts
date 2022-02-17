import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PropertieModule } from './propertie/propertie.module';
import { ReservationModule } from './reservation/reservation.module';
import { AuthModule } from './auth/auth.module';
import { OptionModule } from './option/option.module';


// Decorator - (@) - permite adicionar um comportamento a um objeto já existente em tempo de execução, ou seja, agrega dinamicamente responsabilidades adicionais a um objeto.
// Vem colcado com seu dono
// Normalmente UMA classe por arquivo
// o Módulo é quem comando
@Module({
  imports: [UserModule, PropertieModule, ReservationModule, AuthModule, OptionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
