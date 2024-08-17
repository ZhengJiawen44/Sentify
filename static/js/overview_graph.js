const layout = {
  colorway: ["#e91e63", "#673ab7"],
  barmode: "group",
  xaxis: {
    range: [0, commentList.length],
    autorange: false,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: "",
    showticklabels: false,
  },

  yaxis: {
    autorange: true,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: "",
    showticklabels: false,
  },
  bargap: 0.3,
  margin: {
    l: 5,
    r: 5,
    b: 5,
    t: 15,
    pad: 1,
  },
  paper_bgcolor: "transparent",
  plot_bgcolor: "transparent",
  font: {
    family: "Colfax, IBM Plex Sans",
    color: "black",
  },
};

const config = {
  displaylogo: false,
  responsive: true,
  scrollZoom: false,
  displayModeBar: false,
};

const animationConfig = {
  transition: {
    duration: 10000,
    easing: "cubic-in-out",
  },
  frame: {
    duration: 1000,
  },
};

// Initial Plot for Animation
const sentiments = ["negative", "neutral", "positive"];
const initialData = [
  {
    x: [0, 0, 0],
    y: sentiments,
    name: "sentiment",
    type: "bar",
    orientation: "h",
    text: ["negative", "neutral", "positive"],
    textposition: "inside",
    textfont: {
      family: "arial",
      size: 12,
      color: "white",
    },
  },
];
Plotly.newPlot("overview", initialData, layout, config);

// Final Plot with Animation
const finalValues = [
  resultList[1].length,
  resultList[2].length,
  resultList[0].length,
];

const trace = {
  x: finalValues,
  y: sentiments,
  name: "sentiment",
  type: "bar",
  orientation: "h",
  text: ["negative", "neutral", "positive"],
  textposition: "inside",
};
const finalData = [trace];
Plotly.animate("overview", { data: finalData }, { ...animationConfig });
