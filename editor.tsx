import { type PluginDefinition, createSchemaBuilder } from "@alfons-app/pdk";
import { name } from "./package.json";
import Zod from "zod";
import { DataBarVerticalAddRegular } from "@fluentui/react-icons";

const $ = createSchemaBuilder(name);

const Definition = {
  Icon: () => <DataBarVerticalAddRegular />,
  schema: $.object({
    chartWidth: $.number()
      .setupInspector({
        control: "Numeric",
        category: "visual",
        label: "chartWidth",
        sourcing: "static",
      })
      .default(200),
    chartHeight: $.number()
      .setupInspector({
        control: "Numeric",
        category: "visual",
        label: "chartHeight",
        sourcing: "static",
      })
      .default(200),
    barWidth: $.number()
      .setupInspector({
        control: "Slider",
        category: "visual",
        min: 1,
        max: 40,
        label: "barThickness",
        sourcing: "static",
      })
      .default(10),
    spacing: $.number()
      .setupInspector({
        control: "Slider",
        category: "visual",
        min: 0,
        max: 40,
        label: "barSpacing",
        sourcing: "static",
      })
      .default(10),
    is3d: $.boolean()
      .setupInspector({
        control: "Switch",
        category: "other",
        label: "is3d",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default(false),
    roundedTop: $.boolean()
      .setupInspector({
        control: "Switch",
        category: "other",
        label: "roundedTop",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default(false),
    roundedBottom: $.boolean()
      .setupInspector({
        control: "Switch",
        category: "other",
        label: "roundedBottom",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default(false),
    borderRadius: $.number()
      .setupInspector({
        control: "Slider",
        min: 0,
        max: 20,
        category: "other",
        tab: "PaintBrushFilled",
        label: "borderRadius",
        sourcing: "static",
      })
      .default(10),
    frontColor: $.string()
      .optional()
      .setupInspector({
        control: "ColorPicker",
        category: "color",
        label: "chartColor",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default("#ffffffff"),
    backgroundColor: $.string()
      .optional()
      .setupInspector({
        control: "ColorPicker",
        category: "color",
        label: "backgroundColor",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default("#414141ff"),
    textColor: $.string()
      .optional()
      .setupInspector({
        control: "ColorPicker",
        category: "color",
        label: "textColor",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default("#ffffff"),
    rulesColor: $.string()
      .optional()
      .setupInspector({
        control: "ColorPicker",
        category: "color",
        label: "rulesColor",
        tab: "PaintBrushFilled",
        sourcing: "static",
      })
      .default("#ffffff"),
    values: $.array($.number().setupInspector({ control: "Text" }))
      .setupInspector({ control: "Numeric[]", label: "chartValues" })
      .default([20, 80, 100, 40]),
    onBarPress: $.reference().setupInspector({
      category: "actions",
      sourcing: "reference",
      label: "onBarPress",
    }),
  }),
  shouldAllowChild: () => () => false,
} satisfies PluginDefinition;

export default Definition;

export type Props = Zod.infer<typeof Definition.schema>;
