export interface CandidatoItem {
	id: number;
	status: 'active' | 'approved' | 'rejected' | 'in_progress';
	name: string;
	email: string;
	age: number | string;
	job_description: string;
}