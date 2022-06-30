import Layout from "../components/Layout";
import { Grid } from "@material-ui/core";
import data from "../utils/data";
import PizzaCard from "../components/PizzaCard";

export default function Home() {
  return (
    <Layout>
      <h1>Pizzas</h1>
      <Grid container spacing={3} justifyContent="center">
        {data.pizzas.map((pizza) => {
          return <PizzaCard key={pizza.id} pizza={pizza} />;
        })}
      </Grid>
    </Layout>
  );
}
