import {RComponent} from "../common/r-component";
import {M} from "../common/i18n/m";
import {messageService} from "../common/i18n/message-service";

export class Page1 extends RComponent {

    render() {
        return (
            <div>
                <div>
                    <M m="hello.world"/>
                </div>

                <div >
                    Change language:
                    <button onClick={() => messageService.changeLanguage("vi")}>Tiếng Việt</button>,
                    <button onClick={() => messageService.changeLanguage("en")}>English</button>
                </div>
            </div>
        );
    }
}