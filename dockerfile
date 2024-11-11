FROM python:3.10

# USER app
ENV PYTHONUNBUFFERED 1

RUN mkdir /PortfolioWebApp
WORKDIR /PortfolioWebApp
ADD requirements.txt /PortfolioWebApp/
RUN pip install -r requirements.txt
ADD . /PortfolioWebApp/