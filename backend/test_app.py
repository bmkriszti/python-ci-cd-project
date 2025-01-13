import pytest
from app import app

# Test client fixture
@pytest.fixture
def client():
    with app.test_client() as client:
        yield client

# Test for the home route
def test_home(client):
    response = client.get('/')
    assert response.status_code == 200  # Check if the status code is 200
    

