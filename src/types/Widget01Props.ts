export type Widget01Props = {
    title: string; // widget title
    type: 'compare' | 'normal'; // type of widget
    data: {
      // data for the chart
      key: string; // label
      text: string; // text to display
      value: number; // key is the label, value is the data
    }[];
    options: () => void; // action when clicking on the options button
    total?: number; // total value if type === 'compare'
  };