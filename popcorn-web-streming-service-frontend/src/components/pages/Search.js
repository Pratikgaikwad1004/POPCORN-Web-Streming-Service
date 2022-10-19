import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Sidebar from "../components/Sidebar";
import MenuContext from "../../context/Contexts/MenuContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
// import MovieContext from "../../context/Contexts/MovieContext";
// import WebSeriesContext from "../../context/Contexts/WebSeriesContext";
import ModeContext from "../../context/Contexts/ModeContext";
const Search = () => {
  const menu = useContext(MenuContext);
  // const movie = useContext(MovieContext);
  // const webseries = useContext(WebSeriesContext);
  const mode = useContext(ModeContext);
  const { searchquery } = useParams();

  // finding series which user wants to watch
  let watchmovie = "";
  // if (watchmovie === null) {
  //   watchmovie = webseries.items.find((element) => {
  //     return element.tags.includes(searchquery);
  //   });
  // }
  // if (watchmovie === null) {
  //   watchmovie = movie.items.find((element) => {
  //     return element.tags.includes(searchquery);
  //   });
  // }
  console.log(watchmovie);
  let address = "address";
  const lightStyle = {
    color: "black",
  };
  const darkStyle = {
    color: "white",
  };
  if (mode.checked === false) {
    document.body.style.backgroundColor = "#131722";
  } else {
    document.body.style.backgroundColor = "#fff";
  }
  return (
    <>
      <Navbar showmenu={true} />
      <Grid container spacing={0}>
        <Grid item={true} xs={2.5}>
          {menu.show ? <Menu /> : <Sidebar />}
        </Grid>
        {!menu.show ? (
          <Grid sm={12} xs={12} md={12} lg={9} item={true}>
            {watchmovie === undefined ? (
              "notfound"
            ) : (
              <>
                <h2
                  className="web-series-header"
                  style={mode.checked === false ? darkStyle : lightStyle}
                >
                  {`Search results for "${searchquery}"`} <hr />
                </h2>
                <div className="movies-main">
                  <Card
                    image={watchmovie.image}
                    genre={watchmovie.genre}
                    year={watchmovie.year}
                    address={address}
                    slug={watchmovie.slug}
                    name={watchmovie.name}
                    key={1}
                  />
                </div>
              </>
            )}
          </Grid>
        ) : (
          <Grid sm={9} xs={9} md={9} lg={9} item={true}>
            <h2
              className="web-series-header"
              style={mode.checked === false ? darkStyle : lightStyle}
            >
              {`Search results for "${searchquery}"`} <hr />
            </h2>
            <div className="movies-main">
              {watchmovie.map((item, key) => (
                <Card
                  image={item.image}
                  genre={item.genre}
                  year={item.year}
                  address={address}
                  slug={item.slug}
                  name={item.name}
                  key={key}
                />
              ))}
            </div>
          </Grid>
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default Search;
