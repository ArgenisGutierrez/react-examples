import "./App.css";
import { useFetch } from "./hooks";
const url = "https://jsonplaceholder.typicode.com/users/1";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

function App() {
	const { data, loading, error } = useFetch<User>(url);
	if (loading) {
		return <div>Cargando...</div>;
	}

	if (error) {
		return <div>UPS! Hay un error: {error.message}</div>;
	}

	return <div>{JSON.stringify(data)}</div>;
}

export default App;
