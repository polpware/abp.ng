/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@theme/styles/theme.corporate.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CORPORATE_THEME as baseTheme } from '@nebular/theme';
/** @type {?} */
const baseThemeVariables = baseTheme.variables;
/** @type {?} */
export const CORPORATE_THEME = (/** @type {?} */ ({
    name: 'corporate',
    base: 'corporate',
    variables: {
        temperature: {
            arcFill: ['#ffa36b', '#ffa36b', '#ff9e7a', '#ff9888', '#ff8ea0'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: baseThemeVariables.bg2,
            thumbBorder: '#ffa36b',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['80%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: 'rgba(0, 0, 0, 0)',
            lineBg: baseThemeVariables.primary,
            lineShadowBlur: '0',
            itemColor: baseThemeVariables.border4,
            itemBorderColor: baseThemeVariables.border4,
            itemEmphasisBorderColor: baseThemeVariables.primaryLight,
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            shadowLineShadow: 'rgba(0, 0, 0, 0)',
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            lineGradFrom: baseThemeVariables.primary,
            lineGradTo: baseThemeVariables.primary,
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: 'rgba(0, 0, 0, 0)',
            areaGradTo: 'rgba(0, 0, 0, 0)',
            shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.separator,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '0',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg4,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '0.7',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg3,
            firstAreaGradTo: baseThemeVariables.bg3,
            firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(0, 0, 0, 0)',
            secondAreaGradTo: 'rgba(0, 0, 0, 0)',
            secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 0, 0, 0)',
            thirdAreaGradTo: 'rgba(0, 0, 0, 0)',
            thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg3,
            firstLineGradTo: baseThemeVariables.bg3,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.success,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg3,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['65%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['63%', '92%'],
            shadowOffsetX: '-4',
            shadowOffsetY: '-4',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuY29ycG9yYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGZzL25neC1hZG1pbi8iLCJzb3VyY2VzIjpbImxpYi9AdGhlbWUvc3R5bGVzL3RoZW1lLmNvcnBvcmF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBb0IsZUFBZSxJQUFJLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUUxRSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsU0FBUzs7QUFFOUMsTUFBTSxPQUFPLGVBQWUsR0FBRyxtQkFBQTtJQUM3QixJQUFJLEVBQUUsV0FBVztJQUNqQixJQUFJLEVBQUUsV0FBVztJQUNqQixTQUFTLEVBQUU7UUFDVCxXQUFXLEVBQUU7WUFDWCxPQUFPLEVBQUUsQ0FBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFFO1lBQ2xFLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ2hDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxHQUFHO1lBQy9CLFdBQVcsRUFBRSxTQUFTO1NBQ3ZCO1FBRUQsS0FBSyxFQUFFO1lBQ0wsWUFBWSxFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDeEMsYUFBYSxFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDekMsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHO1lBQ3hDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDdkI7UUFFRCxPQUFPLEVBQUU7WUFDUCxTQUFTLEVBQUUsa0JBQWtCLENBQUMsRUFBRTtZQUNoQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1lBQzlDLGVBQWUsRUFBRSx5Q0FBeUM7WUFDMUQsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtZQUMzQyxpQkFBaUIsRUFBRSxRQUFRO1lBRTNCLGNBQWMsRUFBRSxrQkFBa0I7WUFFbEMsTUFBTSxFQUFFLGtC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a0IsQ0FBQyxPQUFPO1lBQ2pELHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDbEQsb0JBQW9CLEVBQUUsa0JBQWtCO1lBRXhDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDaEQscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUNqRCxtQkFBbUIsRUFBRSxrQkFBa0I7U0FDeEM7UUFFRCxXQUFXLEVBQUU7WUFDWCxRQUFRLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUNwQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUVsQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNO1lBQzNDLGlCQUFpQixFQUFFLFFBQVE7WUFDM0IsZUFBZSxFQUFFLElBQUk7WUFDckIsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUU7WUFDaEMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUM5QyxrQkFBa0IsRUFBRSxHQUFHO1lBQ3ZCLGVBQWUsRUFBRSx5Q0FBeUM7U0FDM0Q7S0FDRjtDQUNGLEVBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmJKU1RoZW1lT3B0aW9ucywgQ09SUE9SQVRFX1RIRU1FIGFzIGJhc2VUaGVtZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcclxuXHJcbmNvbnN0IGJhc2VUaGVtZVZhcmlhYmxlcyA9IGJhc2VUaGVtZS52YXJpYWJsZXM7XHJcblxyXG5leHBvcnQgY29uc3QgQ09SUE9SQVRFX1RIRU1FID0ge1xyXG4gIG5hbWU6ICdjb3Jwb3JhdGUnLFxyXG4gIGJhc2U6ICdjb3Jwb3JhdGUnLFxyXG4gIHZhcmlhYmxlczoge1xyXG4gICAgdGVtcGVyYXR1cmU6IHtcclxuICAgICAgYXJjRmlsbDogWyAnI2ZmYTM2YicsICcjZmZhMzZiJywgJyNmZjllN2EnLCAnI2ZmOTg4OCcsICcjZmY4ZWEwJyBdLFxyXG4gICAgICBhcmNFbXB0eTogYmFzZVRoZW1lVmFyaWFibGVzLmJnMixcclxuICAgICAgdGh1bWJCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnMixcclxuICAgICAgdGh1bWJCb3JkZXI6ICcjZmZhMzZiJyxcclxuICAgIH0sXHJcblxyXG4gICAgc29sYXI6IHtcclxuICAgICAgZ3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcclxuICAgICAgZ3JhZGllbnRSaWdodDogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIHNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIHNlY29uZFNlcmllc0ZpbGw6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXHJcbiAgICAgIHJhZGl1czogWyc4MCUnLCAnOTAlJ10sXHJcbiAgICB9LFxyXG5cclxuICAgIHRyYWZmaWM6IHtcclxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIHRvb2x0aXBCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXHJcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDRweCAxNnB4OycsXHJcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXHJcbiAgICAgIHRvb2x0aXBGb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuXHJcbiAgICAgIHlBeGlzU3BsaXRMaW5lOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcblxyXG4gICAgICBsaW5lQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBsaW5lU2hhZG93Qmx1cjogJzAnLFxyXG4gICAgICBpdGVtQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxyXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxyXG4gICAgICBpdGVtRW1waGFzaXNCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnlMaWdodCxcclxuICAgICAgc2hhZG93TGluZURhcmtCZzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICBzaGFkb3dMaW5lU2hhZG93OiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIGdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIGdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxyXG4gICAgfSxcclxuXHJcbiAgICBlbGVjdHJpY2l0eToge1xyXG4gICAgICB0b29sdGlwQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZyxcclxuICAgICAgdG9vbHRpcExpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcclxuICAgICAgdG9vbHRpcExpbmVXaWR0aDogJzAnLFxyXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxyXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA4cHggMjRweDsnLFxyXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxyXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXHJcblxyXG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMyxcclxuICAgICAgeEF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZyxcclxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXHJcblxyXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBsaW5lU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgIGxpbmVXaWR0aDogJzQnLFxyXG4gICAgICBsaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBsaW5lR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcclxuICAgICAgbGluZVNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG5cclxuICAgICAgYXJlYUdyYWRGcm9tOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIGFyZWFHcmFkVG86ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgc2hhZG93TGluZURhcmtCZzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgfSxcclxuXHJcbiAgICBidWJibGVNYXA6IHtcclxuICAgICAgdGl0bGVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcclxuICAgICAgYXJlYUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmc0LFxyXG4gICAgICBhcmVhSG92ZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnSGlnaGxpZ2h0LFxyXG4gICAgICBhcmVhQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI1LFxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9maXRCYXJBbmltYXRpb25FY2hhcnQ6IHtcclxuICAgICAgdGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxyXG5cclxuICAgICAgZmlyc3RBbmltYXRpb25CYXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIHNlY29uZEFuaW1hdGlvbkJhckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcclxuXHJcbiAgICAgIHNwbGl0TGluZVN0eWxlT3BhY2l0eTogJzEnLFxyXG4gICAgICBzcGxpdExpbmVTdHlsZVdpZHRoOiAnMScsXHJcbiAgICAgIHNwbGl0TGluZVN0eWxlQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXHJcblxyXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxyXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHRvb2x0aXBGb250U2l6ZTogJzE2JyxcclxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIHRvb2x0aXBCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXHJcbiAgICAgIHRvb2x0aXBCb3JkZXJXaWR0aDogJzEnLFxyXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA0cHggMTZweDsnLFxyXG4gICAgfSxcclxuXHJcbiAgICB0cmFmZmljQmFyRWNoYXJ0OiB7XHJcbiAgICAgIGdyYWRpZW50RnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmdMaWdodCxcclxuICAgICAgZ3JhZGllbnRUbzogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXHJcbiAgICAgIHNoYWRvdzogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmdMaWdodCxcclxuICAgICAgc2hhZG93Qmx1cjogJzAnLFxyXG5cclxuICAgICAgYXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcclxuICAgICAgYXhpc0ZvbnRTaXplOiAnMTInLFxyXG5cclxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIHRvb2x0aXBCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXHJcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDhweCAyNHB4OycsXHJcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXHJcbiAgICAgIHRvb2x0aXBGb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIH0sXHJcblxyXG4gICAgY291bnRyeU9yZGVyczoge1xyXG4gICAgICBjb3VudHJ5Qm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxyXG4gICAgICBjb3VudHJ5RmlsbENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmc0LFxyXG4gICAgICBjb3VudHJ5Qm9yZGVyV2lkdGg6ICcxJyxcclxuICAgICAgaG92ZXJlZENvdW50cnlCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIGhvdmVyZWRDb3VudHJ5RmlsbENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeUxpZ2h0LFxyXG4gICAgICBob3ZlcmVkQ291bnRyeUJvcmRlcldpZHRoOiAnMScsXHJcblxyXG4gICAgICBjaGFydEF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxyXG4gICAgICBjaGFydEF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZyxcclxuICAgICAgY2hhcnRBeGlzRm9udFNpemU6ICcxNicsXHJcbiAgICAgIGNoYXJ0R3JhZGllbnRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIGNoYXJ0R3JhZGllbnRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeUxpZ2h0LFxyXG4gICAgICBjaGFydEF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXHJcbiAgICAgIGNoYXJ0U2hhZG93TGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeUxpZ2h0LFxyXG5cclxuICAgICAgY2hhcnRMaW5lQm90dG9tU2hhZG93Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG5cclxuICAgICAgY2hhcnRJbm5lckxpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJnMixcclxuICAgIH0sXHJcblxyXG4gICAgZWNoYXJ0czoge1xyXG4gICAgICBiZzogYmFzZVRoZW1lVmFyaWFibGVzLmJnLFxyXG4gICAgICB0ZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXHJcbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXHJcbiAgICAgIHNwbGl0TGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxyXG4gICAgICBpdGVtSG92ZXJTaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICAgIHRvb2x0aXBCYWNrZ3JvdW5kQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBhcmVhT3BhY2l0eTogJzAuNycsXHJcbiAgICB9LFxyXG5cclxuICAgIGNoYXJ0anM6IHtcclxuICAgICAgYXhpc0xpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnNlcGFyYXRvcixcclxuICAgICAgdGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxyXG4gICAgfSxcclxuXHJcbiAgICBvcmRlcnM6IHtcclxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIHRvb2x0aXBMaW5lQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgdG9vbHRpcExpbmVXaWR0aDogJzAnLFxyXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxyXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA4cHggMjRweDsnLFxyXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxyXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHRvb2x0aXBGb250U2l6ZTogJzIwJyxcclxuXHJcbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxyXG4gICAgICBheGlzRm9udFNpemU6ICcxNicsXHJcbiAgICAgIGF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZyxcclxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXHJcblxyXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBsaW5lU3R5bGU6ICdzb2xpZCcsXHJcbiAgICAgIGxpbmVXaWR0aDogJzQnLFxyXG5cclxuICAgICAgLy8gZmlyc3QgbGluZVxyXG4gICAgICBmaXJzdEFyZWFHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLmJnMyxcclxuICAgICAgZmlyc3RBcmVhR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmczLFxyXG4gICAgICBmaXJzdFNoYWRvd0xpbmVEYXJrQmc6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuXHJcbiAgICAgIC8vIHNlY29uZCBsaW5lXHJcbiAgICAgIHNlY29uZExpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIHNlY29uZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG5cclxuICAgICAgc2Vjb25kQXJlYUdyYWRGcm9tOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIHNlY29uZEFyZWFHcmFkVG86ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgc2Vjb25kU2hhZG93TGluZURhcmtCZzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG5cclxuICAgICAgLy8gdGhpcmQgbGluZVxyXG4gICAgICB0aGlyZExpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXHJcbiAgICAgIHRoaXJkTGluZUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3NMaWdodCxcclxuXHJcbiAgICAgIHRoaXJkQXJlYUdyYWRGcm9tOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIHRoaXJkQXJlYUdyYWRUbzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG4gICAgICB0aGlyZFNoYWRvd0xpbmVEYXJrQmc6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgIH0sXHJcblxyXG4gICAgcHJvZml0OiB7XHJcbiAgICAgIGJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIHRleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcclxuICAgICAgYXhpc0xpbmVDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjQsXHJcbiAgICAgIHNwbGl0TGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuc2VwYXJhdG9yLFxyXG4gICAgICBhcmVhT3BhY2l0eTogJzEnLFxyXG5cclxuICAgICAgYXhpc0ZvbnRTaXplOiAnMTYnLFxyXG4gICAgICBheGlzVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmcsXHJcblxyXG4gICAgICAvLyBmaXJzdCBiYXJcclxuICAgICAgZmlyc3RMaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzMsXHJcbiAgICAgIGZpcnN0TGluZUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLmJnMyxcclxuICAgICAgZmlyc3RMaW5lU2hhZG93OiAncmdiYSgwLCAwLCAwLCAwKScsXHJcblxyXG4gICAgICAvLyBzZWNvbmQgYmFyXHJcbiAgICAgIHNlY29uZExpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIHNlY29uZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBzZWNvbmRMaW5lU2hhZG93OiAncmdiYSgwLCAwLCAwLCAwKScsXHJcblxyXG4gICAgICAvLyB0aGlyZCBiYXJcclxuICAgICAgdGhpcmRMaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgICB0aGlyZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgICB0aGlyZExpbmVTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgIH0sXHJcblxyXG4gICAgb3JkZXJQcm9maXRMZWdlbmQ6IHtcclxuICAgICAgZmlyc3RJdGVtOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcclxuICAgICAgc2Vjb25kSXRlbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIHRoaXJkSXRlbTogYmFzZVRoZW1lVmFyaWFibGVzLmJnMyxcclxuICAgIH0sXHJcblxyXG4gICAgdmlzaXRvcnM6IHtcclxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXHJcbiAgICAgIHRvb2x0aXBMaW5lQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuICAgICAgdG9vbHRpcExpbmVXaWR0aDogJzEnLFxyXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxyXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA4cHggMjRweDsnLFxyXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxyXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHRvb2x0aXBGb250U2l6ZTogJzIwJyxcclxuXHJcbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxyXG4gICAgICBheGlzRm9udFNpemU6ICcxNicsXHJcbiAgICAgIGF4aXNUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZyxcclxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXHJcblxyXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBsaW5lU3R5bGU6ICdkb3R0ZWQnLFxyXG4gICAgICBsaW5lV2lkdGg6ICc2JyxcclxuICAgICAgbGluZUdyYWRGcm9tOiAnI2ZmZmZmZicsXHJcbiAgICAgIGxpbmVHcmFkVG86ICcjZmZmZmZmJyxcclxuICAgICAgbGluZVNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG5cclxuICAgICAgYXJlYUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcclxuICAgICAgYXJlYUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnlMaWdodCxcclxuXHJcbiAgICAgIGlubmVyTGluZVN0eWxlOiAnc29saWQnLFxyXG4gICAgICBpbm5lckxpbmVXaWR0aDogJzEnLFxyXG5cclxuICAgICAgaW5uZXJBcmVhR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgICBpbm5lckFyZWFHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgfSxcclxuXHJcbiAgICB2aXNpdG9yc0xlZ2VuZDoge1xyXG4gICAgICBmaXJzdEljb246IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgICBzZWNvbmRJY29uOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcclxuICAgIH0sXHJcblxyXG4gICAgdmlzaXRvcnNQaWU6IHtcclxuICAgICAgZmlyc3RQaWVHcmFkaWVudExlZnQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgICBmaXJzdFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgICBmaXJzdFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIGZpcnN0UGllUmFkaXVzOiBbJzY1JScsICc5MCUnXSxcclxuXHJcbiAgICAgIHNlY29uZFBpZUdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXHJcbiAgICAgIHNlY29uZFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nTGlnaHQsXHJcbiAgICAgIHNlY29uZFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICAgIHNlY29uZFBpZVJhZGl1czogWyc2MyUnLCAnOTIlJ10sXHJcbiAgICAgIHNoYWRvd09mZnNldFg6ICctNCcsXHJcbiAgICAgIHNoYWRvd09mZnNldFk6ICctNCcsXHJcbiAgICB9LFxyXG5cclxuICAgIHZpc2l0b3JzUGllTGVnZW5kOiB7XHJcbiAgICAgIGZpcnN0U2VjdGlvbjogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXHJcbiAgICAgIHNlY29uZFNlY3Rpb246IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxyXG4gICAgfSxcclxuXHJcbiAgICBlYXJuaW5nUGllOiB7XHJcbiAgICAgIHJhZGl1czogWyc2NSUnLCAnMTAwJSddLFxyXG4gICAgICBjZW50ZXI6IFsnNTAlJywgJzUwJSddLFxyXG5cclxuICAgICAgZm9udFNpemU6ICcyMicsXHJcblxyXG4gICAgICBmaXJzdFBpZUdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXHJcbiAgICAgIGZpcnN0UGllR3JhZGllbnRSaWdodDogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXHJcbiAgICAgIGZpcnN0UGllU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcclxuXHJcbiAgICAgIHNlY29uZFBpZUdyYWRpZW50TGVmdDogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXHJcbiAgICAgIHNlY29uZFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxyXG4gICAgICBzZWNvbmRQaWVTaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxyXG5cclxuICAgICAgdGhpcmRQaWVHcmFkaWVudExlZnQ6IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nLFxyXG4gICAgICB0aGlyZFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nLFxyXG4gICAgICB0aGlyZFBpZVNoYWRvd0NvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXHJcbiAgICB9LFxyXG5cclxuICAgIGVhcm5pbmdMaW5lOiB7XHJcbiAgICAgIGdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcclxuICAgICAgZ3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcclxuXHJcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXHJcbiAgICAgIHRvb2x0aXBGb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgdG9vbHRpcEZvbnRTaXplOiAnMTYnLFxyXG4gICAgICB0b29sdGlwQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZyxcclxuICAgICAgdG9vbHRpcEJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcclxuICAgICAgdG9vbHRpcEJvcmRlcldpZHRoOiAnMScsXHJcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDRweCAxNnB4OycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0gYXMgTmJKU1RoZW1lT3B0aW9ucztcclxuIl19