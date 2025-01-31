import { EmbedProps } from "./PowerBIEmbed";
/**
 * Get JSON string representation of the given map.
 *
 * @param map Map of event and corresponding handler method
 *
 * For example:
 * Input:
 * ```
 *  Map([
        ['loaded', null],
        ['rendered', function () { console.log('Rendered'); }]
    ]);
 * ```
 * Output:
 * ```
 * `[["loaded",""],["rendered","function () { console.log('Rendered'); }"]]`
 * ```
 */
export declare function stringifyMap(map: EmbedProps['eventHandlers']): string;
export declare const SdkType = "powerbi-client-react";
export declare const SdkWrapperVersion = "1.3.5";
