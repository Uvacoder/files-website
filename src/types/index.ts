export type ButtonStyles = "standard" | "primary";
export type TextBoxTypes = "text" | "search" | "tel" | "email" | "url" | "password";
export type Contributor = {
	login: string;
	avatar_url: string;
	contributions: number;
};
export type DocsPage = {
    name: string;
    path: string;
    children?: DocsPage[]
}