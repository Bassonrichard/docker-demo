FROM docker:git

RUN git clone https://github.com/Bassonrichard/Docker-Demo.git

ENTRYPOINT [ "/bin/sh" ]