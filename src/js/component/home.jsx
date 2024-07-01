import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards.jsx";
import { Footer } from "./Footer.jsx"

const Home = () => {
	return (
		// En  este componente utilice props para practicarlos

		<div className="container-fluid" style={{ "padding": + 0 }}>
			<Navbar
				icon="Start Bootstrap"
				home="Home"
				about="About"
				services="Services"
				contact="Contact"
			/>
			<div className="container">
				<Jumbotron />
				<div className="row d-flex justify-content-between mt-5">
					<Cards
						img="https://www.hola.com/imagenes/viajes/20171128102570/seis-destino-austria-clave-invernal-navidad/0-511-634/innsbruck-navidad-invierno-t.jpg"
						cardTitle="Austria"
						cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque mauris, lacinia sit amet interdum a, semper sed ex. "
					/>
					<Cards
						img="https://www.hola.com/imagenes/viajes/20171128102570/seis-destino-austria-clave-invernal-navidad/0-511-634/innsbruck-navidad-invierno-t.jpg"
						cardTitle="Austria"
						cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque mauris, lacinia sit amet interdum a, semper sed ex. "
					/>
					<Cards
						img="https://www.hola.com/imagenes/viajes/20171128102570/seis-destino-austria-clave-invernal-navidad/0-511-634/innsbruck-navidad-invierno-t.jpg"
						cardTitle="Austria"
						cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque mauris, lacinia sit amet interdum a, semper sed ex. "
					/>
					<Cards
						img="https://www.hola.com/imagenes/viajes/20171128102570/seis-destino-austria-clave-invernal-navidad/0-511-634/innsbruck-navidad-invierno-t.jpg"
						cardTitle="Austria"
						cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur neque mauris, lacinia sit amet interdum a, semper sed ex. "
					/>
				</div>
			</div>
			<Footer />
		</div>

	)
};
export default Home;
