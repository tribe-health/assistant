import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { PrimaryWorkmodeSet, WorkMode } from "../../navigation";

export function PrimaryWorkmodeSelect(props: {
  set: PrimaryWorkmodeSet;
  selection: WorkMode;
  onSelect: (selection: WorkMode) => void;
}) {
  const _is_active = (mode: WorkMode) => {
    return mode == props.selection;
  };

  return (
    <>
      <WorkmodeButton
        name={props.set.first}
        active={_is_active(props.set.first)}
        onClick={() => {
          props.onSelect(props.set.first);
        }}
      />
      <WorkmodeButton
        name={props.set.second}
        active={_is_active(props.set.second)}
        onClick={() => {
          props.onSelect(props.set.second);
        }}
      />
    </>
  );
}

function WorkmodeButton(props: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <>
      <WorkmodeLabel active={props.active} onClick={props.onClick}>
        {props.name}
      </WorkmodeLabel>
    </>
  );
}
interface Props {
  active: boolean;
}

const WorkmodeLabel = styled.h3<Props>`
  display: flex;
  text-transform: capitalize;
  font-size: 21px;
  letter-spacing: 0em;
  cursor: pointer;
  user-select: none;

  // reset for h3 init style
  margin: 0;
  margin-top: 14px;

  &:first-child {
    margin-right: 12px;
  }

  ${(props) =>
    props.active
      ? css`
          font-weight: 700;
          line-height: 26px;
          color: #000;
        `
      : css`
          font-weight: 400;
          line-height: 25px;
          color: #cfcfcf;

          &:hover {
            font-size: 21px;
            font-weight: 400;
            line-height: 25px;
            letter-spacing: 0em;
            color: #606060;
          }
        `}
`;
