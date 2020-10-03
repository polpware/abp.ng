import { animate, animation, keyframes, style } from '@angular/animations';
export const bounceIn = animation([
    style({ opacity: '0', display: '{{ display }}' }),
    animate('{{ time}} {{ easing }}', keyframes([
        style({ opacity: '0', transform: '{{ transform }} scale(0.0)', offset: 0 }),
        style({ opacity: '0', transform: '{{ transform }} scale(0.8)', offset: 0.5 }),
        style({ opacity: '1', transform: '{{ transform }} scale(1.0)', offset: 1 })
    ]))
], {
    params: {
        time: '350ms',
        easing: 'cubic-bezier(.7,.31,.72,1.47)',
        display: 'block',
        transform: 'translate(-50%, -50%)'
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlLmFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS1zaGFyZWQvc3JjL2xpYi9hbmltYXRpb25zL2JvdW5jZS5hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUzRSxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUMvQjtJQUNFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBQ2pELE9BQU8sQ0FDTCx3QkFBd0IsRUFDeEIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQzNFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUM3RSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDNUUsQ0FBQyxDQUNIO0NBQ0YsRUFDRDtJQUNFLE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxPQUFPO1FBQ2IsTUFBTSxFQUFFLCtCQUErQjtRQUN2QyxPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsdUJBQXVCO0tBQ25DO0NBQ0YsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgYW5pbWF0aW9uLCBrZXlmcmFtZXMsIHN0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgYm91bmNlSW4gPSBhbmltYXRpb24oXHJcbiAgW1xyXG4gICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIGRpc3BsYXk6ICd7eyBkaXNwbGF5IH19JyB9KSxcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1lfX0ge3sgZWFzaW5nIH19JyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJywgdHJhbnNmb3JtOiAne3sgdHJhbnNmb3JtIH19IHNjYWxlKDAuMCknLCBvZmZzZXQ6IDAgfSksXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSBzY2FsZSgwLjgpJywgb2Zmc2V0OiAwLjUgfSksXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMScsIHRyYW5zZm9ybTogJ3t7IHRyYW5zZm9ybSB9fSBzY2FsZSgxLjApJywgb2Zmc2V0OiAxIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXSxcclxuICB7XHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdGltZTogJzM1MG1zJyxcclxuICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKC43LC4zMSwuNzIsMS40NyknLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG4iXX0=