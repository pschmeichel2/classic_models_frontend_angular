export class OfficeError {
    message: string = '';
    errors: string[] = [];

    constructor(message?: string, errors?: string[]) {
        this.message = message ?? '';
        this.errors = errors ?? [];
      }    

    isEmpty(): boolean {
        return (this.message == '' && this.errors.length == 0);
    }     
}