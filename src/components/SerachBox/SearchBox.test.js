import React from "React";
import { SearchBox } from "./SearchBox";
import { configure, mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { waitForDomChange } from "@testing-library/react";
import * as serachboxservices from "./SerachBox.services";
configure({ adapter: new Adapter() });
describe("SearchBox", () => {
  const mock = new MockAdapter(axios);
  test("should be able to render the search box component", () => {
    const handleClickMock = jest.fn();
    const wrapper = render(<SearchBox handleClick={handleClickMock} />);
    expect(wrapper.find(".search")).toBeDefined();
  });

  test("should be able to render with default place holder", () => {
    const handleClickMock = jest.fn();
    const wrapper = shallow(<SearchBox handleClick={handleClickMock} />);
    expect(wrapper.find("input").at(0).props().placeholder).toEqual(
      "search any thing"
    );
  });
  test("should be able to render with given place holder", () => {
    const handleClickMock = jest.fn();
    const wrapper = shallow(
      <SearchBox handleClick={handleClickMock} placeholder={"search a movie"} />
    );
    expect(wrapper.find("input").props().placeholder).toEqual("search a movie");
  });

  test("should be able to handle click on search button", async () => {
    const getSerachWord = jest.spyOn(serachboxservices, "getSerachWord");

    const handleClickMock = jest.fn();
    const wrapper = shallow(
      <SearchBox handleClick={handleClickMock} placeholder={"search a movie"} />
    );
    wrapper.find("button").simulate("click");

    expect(getSerachWord).toBeCalledWith("any");
  });

  test("should be able to call on load method", () => {
    const handleClickMock = jest.fn();
    const onLoad = jest.fn();

    const wrapper = mount(
      <SearchBox
        handleClick={handleClickMock}
        placeholder={"search a movie"}
        onLoad={onLoad}
      />
    );
    waitForDomChange(() => {
      expect(onLoad).toBeCalled();
    });
  });

  test("should be able to call on mount method", () => {
    const handleClickMock = jest.fn();
    const onLoad = jest.fn();

    const wrapper = mount(
      <SearchBox
        handleClick={handleClickMock}
        placeholder={"search a movie"}
        onMount={onLoad}
      />
    );
    wrapper.unmount();
    expect(onLoad).toBeCalled();
  });
});
