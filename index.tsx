import { ActionContext, type Effect } from "@alfons-app/pdk";
import {
  BarChart,
  BarChartPropsType,
  barDataItem,
} from "react-native-gifted-charts";
import type { Props } from "./editor";
import { useContext } from "react";

function mapPropsToChartData(props: Props): barDataItem[] {
  const mappedValues: barDataItem[] = props.values?.map((value: number) => ({
    ...props,
    value,
    sideColor: props.frontColor,
    topColor: props.frontColor,
    label: value?.toString(),
    barBorderTopLeftRadius: props.roundedTop ? props.borderRadius : 0,
    barBorderTopRightRadius: props.roundedTop ? props.borderRadius : 0,
    barBorderBottomLeftRadius: props.roundedBottom ? props.borderRadius : 0,
    barBorderBottomRightRadius: props.roundedBottom ? props.borderRadius : 0,
    labelTextStyle: { color: props.textColor },
  }));
  return mappedValues;
}

function mapPropsToConfig(
  props: Props
): Omit<
  BarChartPropsType,
  "data" | "onPress" | "yAxisTextStyle" | "roundedTop"
> {
  return {
    ...props,
    roundedTop: false, // roundedTop & roundedBottom z knihovny jsou vypnuté, jelikož mám svoje lepší
    roundedBottom: false,
  };
}

const barChartEffect: Effect<Props> = (props) => {
  const { getAction } = useContext(ActionContext);
  const data = mapPropsToChartData(props);
  const barConfig = mapPropsToConfig(props);
  return (
    <BarChart
      data={data}
      onPress={getAction(props.onPress?.__$ref)}
      yAxisTextStyle={{ color: props.textColor }}
      {...barConfig}
    />
  );
};

export default barChartEffect;
