//@ts-expect-error - This is a remote module
import Module from "remote/Module";
console.log("MODULE", Module);

function App() {
	return (
		<div>
			<Module />
		</div>
	);
}

export default App;
