import * as React from 'react';
import { service, Embed, IEmbedConfiguration, IQnaEmbedConfiguration, IVisualEmbedConfiguration, IReportEmbedConfiguration, IDashboardEmbedConfiguration, ITileEmbedConfiguration } from 'powerbi-client';
/**
 * Type for event handler function of embedded entity
 */
export declare type EventHandler = {
    (event?: service.ICustomEvent<any>, embeddedEntity?: Embed): void | null;
};
/**
 * Props interface for PowerBIEmbed component
 */
export interface EmbedProps {
    embedConfig: IReportEmbedConfiguration | IDashboardEmbedConfiguration | ITileEmbedConfiguration | IQnaEmbedConfiguration | IVisualEmbedConfiguration | IEmbedConfiguration;
    getEmbeddedComponent?: {
        (embeddedComponent: Embed): void;
    };
    eventHandlers?: Map<string, EventHandler>;
    cssClassName?: string;
    phasedEmbedding?: boolean;
    service?: service.Service;
}
export declare enum EmbedType {
    Report = "report",
    Dashboard = "dashboard",
    Tile = "tile",
    Qna = "qna",
    Visual = "visual"
}
/**
 * Base react component to embed Power BI entities like: reports, dashboards, tiles, visual and qna containers.
 */
export declare class PowerBIEmbed extends React.Component<EmbedProps> {
    private _embed?;
    private powerbi;
    private containerRef;
    private prevEventHandlerMapString;
    private get embed();
    private set embed(value);
    constructor(props: EmbedProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: EmbedProps): Promise<void>;
    componentWillUnmount(): void;
    render(): JSX.Element;
    /**
     * Embed the powerbi entity (Load for phased embedding)
     */
    private embedEntity;
    /**
     * When component updates, choose to _embed_ the powerbi entity or _update the accessToken_ in the embedded entity
     * or do nothing if the embedUrl and accessToken did not update in the new props
     *
     * @param prevProps EmbedProps
     * @returns void
     */
    private embedOrUpdateAccessToken;
    /**
     * Sets all event handlers from the props on the embedded entity
     *
     * @param embed Embedded object
     * @param eventHandlers Array of eventhandlers to be set on embedded entity
     * @returns void
     */
    private setEventHandlers;
    /**
     * Returns the embedded object via _getEmbed_ callback method provided in props
     *
     * @returns void
     */
    private invokeGetEmbedCallback;
    /**
     * Update settings from props of the embedded artifact
     *
     * @returns void
     */
    private updateSettings;
}
