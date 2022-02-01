import React from "react";
import { SearchBox } from "../components/SerachBox/SearchBox";
export default {
  title: "SerachBox",
  component: SearchBox,
};
const Template = (args) => <SearchBox {...args} />;

export const Red = Template.bind({});

Red.args = {
  placeholder: "hello",
};
