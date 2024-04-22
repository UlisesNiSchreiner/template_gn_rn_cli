import { ConnectionEvent, Event, SetOutputEvent } from "test_fluxjs";

export const useEventManager = (navigation: (navigationId: string) => void, addOutput: (key: string, value: string) => void ) => {

    const executeEvent = (event: Event) => {
        console.log("1 - execute event", event)
        if (event.type === 'connection_event') {
            const connectionEvent = event as ConnectionEvent
            navigation(connectionEvent.conectionId)
        } if (event.type === 'set_output_event') {
           const addOutputEvent = event as SetOutputEvent
            addOutput(addOutputEvent.key, addOutputEvent.value)
        } if (event.type === 'web_redirection_event') {
            // TODO manage web redirection
            //const webNavigationEvent = event as WebRedirectionEvent
            //history(webNavigationEvent.path);
        }
    }

    return {executeEvent}
}
