#include <iostream>
#include <deque>
#include <vector>
#include <utility>
using namespace std;

struct Pos {
  int x;
  int y;

  bool operator==(const Pos& other) const {
    return x == other.x && y == other.y;
  }
};

int main() 
{
  int N, K, L;
  cin >> N >> K;

  vector<Pos> appleList(K);
  for(int i = 0; i < K; i++) {
    int row, col;
    cin >> row >> col;
    appleList[i] = {row - 1, col - 1};
  }

  cin >> L;
  vector<pair<int, char>> directionList(L);
  for(int i = 0; i < L; i++) {
    cin >> directionList[i].first >> directionList[i].second;
  }

  int dx[4] = {0, 1, 0, -1};
  int dy[4] = {1, 0, -1, 0};

  deque<Pos> snakeStatus;
  snakeStatus.push_back({0, 0});

  int snakeDirection = 0;
  int time = 0;
  int directionListTopIndex = 0;

  while (true) {
    time++;
    
    Pos head = snakeStatus.back();
    Pos nextHead = {head.x + dx[snakeDirection], head.y + dy[snakeDirection]};

    if (nextHead.x < 0 || nextHead.x >= N || nextHead.y < 0 || nextHead.y >= N)
      break;

    bool selfCollision = false;
    for (const Pos& p : snakeStatus) {
      if (p == nextHead) {
        selfCollision = true;
        break;
      }
    }
    if (selfCollision) break;

    snakeStatus.push_back(nextHead);

    bool ateApple = false;
    for (auto it = appleList.begin(); it != appleList.end(); ++it) {
      if (*it == nextHead) {
        ateApple = true;
        appleList.erase(it);
        break;
      }
    }
    if (!ateApple) {
      snakeStatus.pop_front();
    }

    if (directionListTopIndex < L && directionList[directionListTopIndex].first == time) {
      char dir = directionList[directionListTopIndex].second;
      if (dir == 'L') {
        snakeDirection = (snakeDirection + 3) % 4;
      } else {
        snakeDirection = (snakeDirection + 1) % 4;
      }
      directionListTopIndex++;
    }
  }

  cout << time << endl;
  return 0;
}
