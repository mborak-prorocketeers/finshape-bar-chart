import { ActionContext, type Effect } from "@alfons-app/pdk";
import { BarChart, barDataItem } from "react-native-gifted-charts";
import type { Props } from "./editor";
import { useContext } from "react";

const barChartEffect: Effect<Props> = (props) => {
  const { getAction } = useContext(ActionContext);
  const mappedValues = props.values.map(
    (value: number) =>
      ({
        value: value,
        frontColor: props.barColor,
        barWidth: props.thickness,
        label: value.toString(),
        barBorderTopLeftRadius: props.roundedTop ? props.borderRadius : 0,
        barBorderTopRightRadius: props.roundedTop ? props.borderRadius : 0,
        barBorderBottomLeftRadius: props.roundedBottom ? props.borderRadius : 0,
        barBorderBottomRightRadius: props.roundedBottom
          ? props.borderRadius
          : 0,
        labelTextStyle: { color: props.textColor },
      } as barDataItem)
  );
  return (
    <BarChart
      data={mappedValues}
      spacing={props.spacing}
      width={props.chartWidth}
      height={props.chartHeight}
      backgroundColor={props.backgroundColor}
      isThreeD={props.is3d}
      sideColor={props.barColor}
      topColor={props.barColor}
      yAxisTextStyle={{ color: props.textColor }}
      rulesType={props.rulesType}
      onPress={getAction(props.onPress?.__$ref)}
      rulesColor={props.rulesColor}
    />
  );
};

export default barChartEffect;
