import { borderColor } from '@material-ui/system';
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';
import react from 'react';
import {Line} from 'react-chartjs-2';

function Graphics(props) {
    const datas={
        "CS2021":[25, 30, 29, 32, 33],
        "CS2022":[30, 31, 32, 33, 34],
        "CS2023":[28, 29, 30, 31, 30],
        "CS2024":[28, 31, 29, 30, 31]
    }
    const data = {
      labels: [
        "2021-1",
        "2021-2",
        "2022-0",
        "2022-1",
        "2022-2",
        "2023-0",
        "2023-1",
        "2023-2",
        "2024-0",
      ],
      datasets: [
        {
          label: "Cantidad",
          fill: false,
          backgroundColor: "rgba(73,155,234,1)",
          borderColor: "rgba(73,155,234,1)",
          pointBorderColor: "rgba(73,155,234,1)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(73,155,234,1)",
          pointHoverBorderColor: "rgba(73,155,234,1)",
          pointRadius: 1,
          pointHitRadius: 10,
          data: [25, 30, 29, 32, 33, 29, 27, 30, 32],
        },
      ],
    };
    return (
        <div className="containerGrafica" >
            <Line data={data} />
        </div>

    );
}

export default Graphics;
