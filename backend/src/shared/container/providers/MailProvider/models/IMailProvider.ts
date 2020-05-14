import ISendMailDTO from '@shared/container/providers/MailProvider/dtos/ISendMailDTO';

export default interface IMailprovider {
  sendMail(data: ISendMailDTO): Promise<void>;
}
