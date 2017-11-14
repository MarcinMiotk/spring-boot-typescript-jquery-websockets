package backend.websocket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

@Controller
public class ChatWebSocketHandler extends TextWebSocketHandler {

    final static Logger LOG = LoggerFactory.getLogger(ChatWebSocketHandler.class);

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        LOG.info("-------------------------");
        LOG.info("ID: {}", session.getId());
        LOG.info("HEADERS: {}", session.getHandshakeHeaders());
        LOG.info("ADDRESS REMOT: {}", session.getRemoteAddress());
        LOG.info("URI: {}", session.getUri());
        LOG.info("-------------------------");
        LOG.info("GOT message payload: {} ", message.getPayload());

        CompletableFuture.delayedExecutor(1, TimeUnit.SECONDS).execute(() -> {
            try {
                String json = "{ \"name\": \"Message from server: " + message.getPayload() + "\"}";
                TextMessage toSend = new TextMessage(json);
                session.sendMessage(toSend);
            } catch (Exception ex) {
                ex.printStackTrace();
                LOG.error(ex.toString(), ex);
            }
        });
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        LOG.info("-------------------------");
        LOG.info("CONNECTION ESTABLISHED");
        LOG.info("ID: {}", session.getId());
        LOG.info("-------------------------");
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        LOG.info("-------------------------");
        LOG.info("CONNECTION CLOSED");
        LOG.info("ID: {}", session.getId());
        LOG.info("STATUS reason: {}", status.getReason());
        LOG.info("STATUS code: {}", status.getCode());
        LOG.info("-------------------------");
    }
}
