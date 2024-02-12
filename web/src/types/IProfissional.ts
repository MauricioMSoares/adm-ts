import IEndereco from "./IEndereco";

export default interface IProfissional {
	name: string,
	crm: string,
	image: string,
	specialty: string,
	hasHealthPlan: boolean,
	password: string,
	healthPlan: string[],
	isActive: boolean,
	email: string,
	phone: string,
	address: IEndereco,
}