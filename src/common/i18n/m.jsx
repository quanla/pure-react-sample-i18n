import {RComponent} from "../r-component";
import {messageService} from "./message-service";

export class M extends RComponent {

    constructor(props, context) {
        super(props, context);

        this.onUnmount(messageService.onChangeLanguage(() => this.forceUpdate()));
    }

    render() {
        const {m} = this.props;
        return (
            messageService.getMessage(m)
        );
    }
}